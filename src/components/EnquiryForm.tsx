"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, Calendar, MapPin, Mail, User } from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    bride_name: "",
    groom_name: "",
    email: "",
    wedding_date: "",
    venue: "",
    theme: "traditional",
    custom_message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bride_groom_name: `${formData.bride_name} & ${formData.groom_name}`,
          email: formData.email,
          wedding_date: formData.wedding_date,
          venue: formData.venue,
          theme: formData.theme,
          custom_message: formData.custom_message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(
          "Thank you! Your wedding invitation enquiry has been received. Our design studio will review your celebration details and connect with you shortly."
        );
        setFormData({
          bride_name: "",
          groom_name: "",
          email: "",
          wedding_date: "",
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
      setFeedbackMessage("A network error occurred. Please try again or reach out to us directly.");
    }
  };

  return (
    <div className="bg-ivory rounded-2xl border-2 border-champagne/70 shadow-luxury p-6 sm:p-10 md:p-12 relative">
      {/* Success Notification Banner */}
      {status === "success" && (
        <div className="mb-8 p-6 rounded-xl bg-lavender-50 border border-floral-lavender flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-plum-royal flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-serif text-xl font-medium text-plum-deep mb-1">
              Enquiry Submitted Successfully
            </h3>
            <p className="text-sm text-mutedText leading-relaxed font-light">
              {feedbackMessage}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 text-xs uppercase tracking-wider font-semibold text-plum-royal hover:underline"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      )}

      {/* Error Notification Banner */}
      {status === "error" && (
        <div className="mb-8 p-5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-red-800">Submission Error</h3>
            <p className="text-xs text-red-700 mt-0.5 font-light">{feedbackMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1 & 2: Bride's Name & Groom's Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="bride_name"
              className="block text-xs uppercase tracking-editorial font-semibold text-plum-deep mb-2 flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-plum-royal" />
              <span>Bride&apos;s Name</span>
              <span className="text-plum-royal">*</span>
            </label>
            <input
              type="text"
              id="bride_name"
              name="bride_name"
              value={formData.bride_name}
              onChange={handleChange}
              placeholder="e.g. Priya Sharma"
              required
              className="w-full px-4 py-3 bg-lavender-50/50 border border-champagne/80 rounded-lg text-sm text-plum-deep placeholder-mutedText/50 focus:outline-none focus:ring-2 focus:ring-plum-royal/40 focus:border-plum-royal transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="groom_name"
              className="block text-xs uppercase tracking-editorial font-semibold text-plum-deep mb-2 flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-plum-royal" />
              <span>Groom&apos;s Name</span>
              <span className="text-plum-royal">*</span>
            </label>
            <input
              type="text"
              id="groom_name"
              name="groom_name"
              value={formData.groom_name}
              onChange={handleChange}
              placeholder="e.g. Rohan Patel"
              required
              className="w-full px-4 py-3 bg-lavender-50/50 border border-champagne/80 rounded-lg text-sm text-plum-deep placeholder-mutedText/50 focus:outline-none focus:ring-2 focus:ring-plum-royal/40 focus:border-plum-royal transition-colors"
            />
          </div>
        </div>

        {/* Step 3 & 4: Email Address & Wedding Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-editorial font-semibold text-plum-deep mb-2 flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-plum-royal" />
              <span>Email Address</span>
              <span className="text-plum-royal">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. priya.rohan@example.com"
              required
              className="w-full px-4 py-3 bg-lavender-50/50 border border-champagne/80 rounded-lg text-sm text-plum-deep placeholder-mutedText/50 focus:outline-none focus:ring-2 focus:ring-plum-royal/40 focus:border-plum-royal transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="wedding_date"
              className="block text-xs uppercase tracking-editorial font-semibold text-plum-deep mb-2 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-plum-royal" />
              <span>Wedding Ceremony Date</span>
              <span className="text-plum-royal">*</span>
            </label>
            <input
              type="date"
              id="wedding_date"
              name="wedding_date"
              value={formData.wedding_date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-lavender-50/50 border border-champagne/80 rounded-lg text-sm text-plum-deep focus:outline-none focus:ring-2 focus:ring-plum-royal/40 focus:border-plum-royal transition-colors"
            />
          </div>
        </div>

        {/* Step 5 & 6: Wedding Venue & Preferred Invitation Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="venue"
              className="block text-xs uppercase tracking-editorial font-semibold text-plum-deep mb-2 flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-plum-royal" />
              <span>Wedding Venue</span>
              <span className="text-plum-royal">*</span>
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="e.g. The Grand Palace, Surat / Udaipur"
              required
              className="w-full px-4 py-3 bg-lavender-50/50 border border-champagne/80 rounded-lg text-sm text-plum-deep placeholder-mutedText/50 focus:outline-none focus:ring-2 focus:ring-plum-royal/40 focus:border-plum-royal transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="theme"
              className="block text-xs uppercase tracking-editorial font-semibold text-plum-deep mb-2"
            >
              Preferred Invitation Theme
            </label>
            <select
              id="theme"
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-lavender-50/50 border border-champagne/80 rounded-lg text-sm text-plum-deep focus:outline-none focus:ring-2 focus:ring-plum-royal/40 focus:border-plum-royal transition-colors"
            >
              <option value="traditional">Traditional & Royal Indian Heritage</option>
              <option value="modern">Modern Minimalist & Chic</option>
              <option value="floral">Pastel Floral & Botanical Watercolor</option>
              <option value="animated">Animated Motion Video Suite</option>
            </select>
          </div>
        </div>

        {/* Step 7: Additional Requirements */}
        <div>
          <label
            htmlFor="custom_message"
            className="block text-xs uppercase tracking-editorial font-semibold text-plum-deep mb-2"
          >
            Additional Requirements & Custom Details
          </label>
          <textarea
            id="custom_message"
            name="custom_message"
            rows={4}
            value={formData.custom_message}
            onChange={handleChange}
            placeholder="Share music preferences, ceremonial timelines (Haldi, Mehendi, Sangeet, Reception), family hashtags, or any specific inspirations..."
            className="w-full px-4 py-3 bg-lavender-50/50 border border-champagne/80 rounded-lg text-sm text-plum-deep placeholder-mutedText/50 focus:outline-none focus:ring-2 focus:ring-plum-royal/40 focus:border-plum-royal transition-colors resize-y"
          />
        </div>

        {/* Step 8: Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 px-6 bg-plum-royal hover:bg-plum-dark text-ivory text-xs uppercase tracking-luxury font-semibold rounded-lg shadow-subtle hover:shadow-luxury transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed group border border-champagne/60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Your Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-champagne" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
