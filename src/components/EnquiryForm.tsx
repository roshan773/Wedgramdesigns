"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    bride_groom_name: "",
    email: "",
    engagement_date: "",
    mehendi_date: "",
    sangeet_date: "",
    haldi_date: "",
    wedding_date: "",
    reception_date: "",
    venue: "",
    theme: "traditional",
    custom_message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    try {
      // Background submission through secure server-side API proxy
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(
          "Thank you! Your wedding invitation enquiry has been received. Our design studio will review your celebration details and connect with you shortly."
        );
        // Reset form fields
        setFormData({
          bride_groom_name: "",
          email: "",
          engagement_date: "",
          mehendi_date: "",
          sangeet_date: "",
          haldi_date: "",
          wedding_date: "",
          reception_date: "",
          venue: "",
          theme: "traditional",
          custom_message: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.message ||
            "Unable to submit your enquiry at this moment. Please check your details and try again."
        );
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setFeedbackMessage(
        "A network error occurred. Please try again or reach out to us directly."
      );
    }
  };

  return (
    <section
      id="contact"
      aria-label="Wedding Invitation Order Form"
      className="py-24 bg-ivory-100 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-luxury text-gold-dark font-semibold mb-3">
            Start Your Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal">
            Wedding Invitation Form
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6 mb-4" />
          <p className="text-sm sm:text-base text-charcoal-50 font-light">
            Share your ceremonial milestones, venue details, and stylistic
            preferences. We will design an unforgettable wedding invitation suite
            for you.
          </p>
        </div>

        {/* Elegant Luxury Form Card */}
        <div className="bg-ivory-50 rounded-2xl border border-champagne-300 shadow-luxury p-6 sm:p-10 md:p-12 relative">
          {/* Success Banner */}
          {status === "success" && (
            <div className="mb-8 p-6 rounded-xl bg-champagne-100 border border-gold/40 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-gold-deep flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-1">
                  Enquiry Submitted
                </h3>
                <p className="text-sm text-charcoal-100 leading-relaxed font-light">
                  {feedbackMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs uppercase tracking-wider font-semibold text-gold-deep hover:underline"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {status === "error" && (
            <div className="mb-8 p-5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-red-800">
                  Submission Error
                </h3>
                <p className="text-xs text-red-700 mt-0.5 font-light">
                  {feedbackMessage}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Bride & Groom Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="brideGroomName"
                  className="block text-xs uppercase tracking-editorial font-semibold text-charcoal mb-2"
                >
                  Bride & Groom Name <span className="text-gold-deep">*</span>
                </label>
                <input
                  type="text"
                  id="brideGroomName"
                  name="bride_groom_name"
                  value={formData.bride_groom_name}
                  onChange={handleChange}
                  placeholder="e.g. Priya & Rohan"
                  required
                  className="w-full px-4 py-3.5 bg-ivory-100 border border-champagne-300 rounded-lg text-sm text-charcoal placeholder-charcoal-50/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-editorial font-semibold text-charcoal mb-2"
                >
                  Email Address <span className="text-gold-deep">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. yourname@example.com"
                  required
                  className="w-full px-4 py-3.5 bg-ivory-100 border border-champagne-300 rounded-lg text-sm text-charcoal placeholder-charcoal-50/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                />
              </div>
            </div>

            {/* Wedding Ceremonies & Dates Table */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs uppercase tracking-editorial font-semibold text-charcoal">
                  Wedding Ceremonies & Dates
                </label>
                <span className="text-[11px] text-charcoal-50 italic">
                  Select dates for all applicable events
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-champagne-300 bg-ivory-100 shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-charcoal text-ivory-100 uppercase text-[11px] tracking-wider font-semibold">
                      <tr>
                        <th className="py-3 px-4">Ceremony</th>
                        <th className="py-3 px-4">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-champagne-300/40 text-charcoal">
                      <tr className="hover:bg-champagne-100/40 transition-colors">
                        <td className="py-2.5 px-4 font-medium text-xs sm:text-sm">
                          Engagement
                        </td>
                        <td className="py-2 px-4">
                          <input
                            type="date"
                            name="engagement_date"
                            value={formData.engagement_date}
                            onChange={handleChange}
                            className="w-full sm:w-auto px-3 py-1.5 bg-ivory-50 border border-champagne-300 rounded text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </td>
                      </tr>
                      <tr className="hover:bg-champagne-100/40 transition-colors">
                        <td className="py-2.5 px-4 font-medium text-xs sm:text-sm">
                          Mehendi
                        </td>
                        <td className="py-2 px-4">
                          <input
                            type="date"
                            name="mehendi_date"
                            value={formData.mehendi_date}
                            onChange={handleChange}
                            className="w-full sm:w-auto px-3 py-1.5 bg-ivory-50 border border-champagne-300 rounded text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </td>
                      </tr>
                      <tr className="hover:bg-champagne-100/40 transition-colors">
                        <td className="py-2.5 px-4 font-medium text-xs sm:text-sm">
                          Sangeet
                        </td>
                        <td className="py-2 px-4">
                          <input
                            type="date"
                            name="sangeet_date"
                            value={formData.sangeet_date}
                            onChange={handleChange}
                            className="w-full sm:w-auto px-3 py-1.5 bg-ivory-50 border border-champagne-300 rounded text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </td>
                      </tr>
                      <tr className="hover:bg-champagne-100/40 transition-colors">
                        <td className="py-2.5 px-4 font-medium text-xs sm:text-sm">
                          Haldi
                        </td>
                        <td className="py-2 px-4">
                          <input
                            type="date"
                            name="haldi_date"
                            value={formData.haldi_date}
                            onChange={handleChange}
                            className="w-full sm:w-auto px-3 py-1.5 bg-ivory-50 border border-champagne-300 rounded text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </td>
                      </tr>
                      <tr className="bg-champagne-200/30 hover:bg-champagne-200/50 transition-colors">
                        <td className="py-2.5 px-4 font-semibold text-xs sm:text-sm text-charcoal flex items-center gap-1.5">
                          <span>Wedding Ceremony</span>
                          <span className="text-gold-deep">*</span>
                        </td>
                        <td className="py-2 px-4">
                          <input
                            type="date"
                            name="wedding_date"
                            value={formData.wedding_date}
                            onChange={handleChange}
                            required
                            className="w-full sm:w-auto px-3 py-1.5 bg-ivory-50 border border-champagne-300 rounded text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-gold font-medium"
                          />
                        </td>
                      </tr>
                      <tr className="hover:bg-champagne-100/40 transition-colors">
                        <td className="py-2.5 px-4 font-medium text-xs sm:text-sm">
                          Reception
                        </td>
                        <td className="py-2 px-4">
                          <input
                            type="date"
                            name="reception_date"
                            value={formData.reception_date}
                            onChange={handleChange}
                            className="w-full sm:w-auto px-3 py-1.5 bg-ivory-50 border border-champagne-300 rounded text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-gold"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Row 3: Venue & Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="venue"
                  className="block text-xs uppercase tracking-editorial font-semibold text-charcoal mb-2"
                >
                  Venue Details <span className="text-gold-deep">*</span>
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="e.g. The Grand Palace, Surat / Udaipur"
                  required
                  className="w-full px-4 py-3.5 bg-ivory-100 border border-champagne-300 rounded-lg text-sm text-charcoal placeholder-charcoal-50/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="theme"
                  className="block text-xs uppercase tracking-editorial font-semibold text-charcoal mb-2"
                >
                  Invitation Theme
                </label>
                <select
                  id="theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-ivory-100 border border-champagne-300 rounded-lg text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                >
                  <option value="traditional">Traditional & Royal</option>
                  <option value="modern">Modern & Contemporary</option>
                  <option value="floral">Floral & Botanical</option>
                  <option value="minimal">Minimalist Editorial</option>
                </select>
              </div>
            </div>

            {/* Row 4: Custom Message */}
            <div>
              <label
                htmlFor="custom_message"
                className="block text-xs uppercase tracking-editorial font-semibold text-charcoal mb-2"
              >
                Custom Message or Special Requirements
              </label>
              <textarea
                id="custom_message"
                name="custom_message"
                rows={3}
                value={formData.custom_message}
                onChange={handleChange}
                placeholder="Share any special song selections, family hashtags, dress codes, or custom design ideas..."
                className="w-full px-4 py-3.5 bg-ivory-100 border border-champagne-300 rounded-lg text-sm text-charcoal placeholder-charcoal-50/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-y"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 px-6 bg-charcoal hover:bg-gold-dark text-ivory-100 text-xs uppercase tracking-luxury font-semibold rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed group"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>Order Invitation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
