import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function OnboardingForm() {
  const [reels, setReels] = useState(1);
  const [images, setImages] = useState(5);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    address: "",

    service: "Photo",
    shoot_date: "",

    exclusions: "",

    timeline_agree: false,
    revision_agree: false,
    payment_agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const adjust = (type, amount) => {
    if (type === "reels") {
      setReels((prev) => Math.max(0, prev + amount));
    }

    if (type === "images") {
      setImages((prev) => Math.max(0, prev + amount));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.timeline_agree ||
      !formData.revision_agree ||
      !formData.payment_agree
    ) {
      alert(
        "Please confirm all policy agreements before submitting."
      );
      return;
    }

    const requiredFields = [
      "name",
      "email",
      "phone",
      "instagram",
      "address",
      "shoot_date",
    ];

    for (const field of requiredFields) {
      if (!formData[field].trim()) {
        alert("Please fill in all required fields.");
        return;
      }
    }

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      instagram: formData.instagram,
      address: formData.address,

      service: formData.service,
      shoot_date: formData.shoot_date,

      reels,
      edited_images: images,

      exclusions: formData.exclusions || "None",

      timeline_agree: formData.timeline_agree
        ? "Agreed"
        : "Not Agreed",

      revision_agree: formData.revision_agree
        ? "Agreed"
        : "Not Agreed",

      payment_agree: formData.payment_agree
        ? "Agreed"
        : "Not Agreed",

      submitted_at: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_xaks21m",
        "template_xxfrrjp",
        templateParams,
        "yozINfgy0tCyuyq-J"
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        instagram: "",
        address: "",

        service: "Photo",
        shoot_date: "",

        exclusions: "",

        timeline_agree: false,
        revision_agree: false,
        payment_agree: false,
      });

      setReels(1);
      setImages(5);
    } catch (error) {
      console.error(error);

      alert(
        "Failed to send form. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-red-50 text-[#1a1a18] font-sans">
      <div className="max-w-[780px] mx-auto px-4 md:px-8 py-10 md:py-14">

        {/* HEADER */}

        <header className="mt-15 border-b border-[#c8c6bc] pb-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">

          <div>
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#c8a96e] mb-1">
              Lumi Spotlight
            </div>

            <h1 className="font-serif text-3xl md:text-5xl leading-tight font-normal">
             Onboarding Form
            </h1>
          </div>

          <div className="text-left md:text-right text-[12px] text-[#8a8a84] leading-7">
            <span className="block">
              Mobile Videography & Photography
            </span>

            <span className="block">
              Please fill all required fields
            </span>
          </div>

        </header>

        <form onSubmit={handleSubmit} noValidate>

          {/* SECTION 01 */}

          <div className="mb-8 border border-[#e2e0d8] rounded  overflow-hidden">

            <div className="bg-[#f2f0ea] border-b border-[#e2e0d8] px-6 py-4 flex items-center gap-4">

              <span className="text-[10px] uppercase tracking-[0.12em] text-[#8a8a84] min-w-[68px]">
                Section 01
              </span>

              <span className="font-serif text-[15px]">
                Your Details
              </span>

            </div>

            <div className="p-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 mb-4">

                <div className="flex flex-col gap-1">

                  <label className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#8a8a84]">
                    Full name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#faf9f6] border border-[#c8c6bc] px-3 py-[9px] text-[14px] outline-none focus:border-[#c8a96e] focus:bg-white"
                  />

                </div>

                <div className="flex flex-col gap-1">

                  <label className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#8a8a84]">
                    Email address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#faf9f6] border border-[#c8c6bc] px-3 py-[9px] text-[14px] outline-none focus:border-[#c8a96e] focus:bg-white"
                  />

                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 mb-4">

                <div className="flex flex-col gap-1">

                  <label className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#8a8a84]">
                    Phone number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#faf9f6] border border-[#c8c6bc] px-3 py-[9px] text-[14px] outline-none focus:border-[#c8a96e] focus:bg-white"
                  />

                </div>

                <div className="flex flex-col gap-1">

                  <label className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#8a8a84]">
                    Instagram handle *
                  </label>

                  <input
                    type="text"
                    name="instagram"
                    placeholder="@yourhandle"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full bg-[#faf9f6] border border-[#c8c6bc] px-3 py-[9px] text-[14px] outline-none focus:border-[#c8a96e] focus:bg-white"
                  />

                </div>

              </div>

              <div className="flex flex-col gap-1">

                <label className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#8a8a84]">
                  Address *
                </label>

                <input
                  type="text"
                  name="address"
                  placeholder="Street, City, State"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-[#faf9f6] border border-[#c8c6bc] px-3 py-[9px] text-[14px] outline-none focus:border-[#c8a96e] focus:bg-white"
                />

              </div>

            </div>

          </div>

          {/* SECTION 02 */}

          <div className="mb-8 border border-[#e2e0d8] rounded overflow-hidden">

            <div className="bg-[#f2f0ea] border-b border-[#e2e0d8] px-6 py-4 flex items-center gap-4">

              <span className="text-[10px] uppercase tracking-[0.12em] text-[#8a8a84] min-w-[68px]">
                Section 02
              </span>

              <span className="font-serif text-[15px]">
                Package Details
              </span>

            </div>

            <div className="p-6">

              <div className="text-[11px] uppercase tracking-[0.08em] text-[#8a8a84] font-medium mb-3">
                Service type *
              </div>

              <div className="flex flex-col md:flex-row border border-[#c8c6bc] overflow-hidden">

                {["Photo", "Video", "Both"].map((item) => (
                  <label
                    key={item}
                    className={`flex-1 text-center py-3 text-[13px] font-medium cursor-pointer border-b md:border-b-0 md:border-r border-[#c8c6bc] last:border-r-0 transition-all ${
                      formData.service === item
                        ? "bg-[#f5edd8] text-[#8a6f3e]"
                        : "bg-[#faf9f6] text-[#4a4a46]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={item}
                      checked={formData.service === item}
                      onChange={handleChange}
                      className="hidden"
                    />

                    {item}
                  </label>
                ))}

              </div>

              <div className="mt-4 flex flex-col gap-1">

                <label className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#8a8a84]">
                  Preferred shoot date *
                </label>

                <input
                  type="date"
                  name="shoot_date"
                  value={formData.shoot_date}
                  onChange={handleChange}
                  className="w-full bg-[#faf9f6] border border-[#c8c6bc] px-3 py-[9px] text-[14px] outline-none focus:border-[#c8a96e] focus:bg-white"
                />

              </div>

              {/* COUNTERS */}

              <div className="mt-6 border-t border-[#e2e0d8]">

                {/* REELS */}

                <div className="flex items-center justify-between py-4 border-b border-[#e2e0d8]">

                  <div>
                    <label className="text-[14px]">
                      Number of reels
                    </label>

                    <small className="block text-[12px] text-[#8a8a84]">
                      Short-form video edits
                    </small>
                  </div>

                  <div className="flex items-center gap-4">

                    <button
                      type="button"
                      onClick={() => adjust("reels", -1)}
                      className="w-[30px] h-[30px] rounded-full border border-[#c8c6bc] bg-[#f2f0ea] text-[18px] flex items-center justify-center hover:bg-[#e8e6de]"
                    >
                      −
                    </button>

                    <span className="font-serif text-[17px] min-w-[28px] text-center">
                      {reels}
                    </span>

                    <button
                      type="button"
                      onClick={() => adjust("reels", 1)}
                      className="w-[30px] h-[30px] rounded-full border border-[#c8c6bc] bg-[#f2f0ea] text-[18px] flex items-center justify-center hover:bg-[#e8e6de]"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* IMAGES */}

                <div className="flex items-center justify-between py-4">

                  <div>
                    <label className="text-[14px]">
                      Edited images
                    </label>

                    <small className="block text-[12px] text-[#8a8a84]">
                      Final retouched photos
                    </small>
                  </div>

                  <div className="flex items-center gap-4">

                    <button
                      type="button"
                      onClick={() => adjust("images", -1)}
                      className="w-[30px] h-[30px] rounded-full border border-[#c8c6bc] bg-[#f2f0ea] text-[18px] flex items-center justify-center hover:bg-[#e8e6de]"
                    >
                      −
                    </button>

                    <span className="font-serif text-[17px] min-w-[28px] text-center">
                      {images}
                    </span>

                    <button
                      type="button"
                      onClick={() => adjust("images", 1)}
                      className="w-[30px] h-[30px] rounded-full border border-[#c8c6bc] bg-[#f2f0ea] text-[18px] flex items-center justify-center hover:bg-[#e8e6de]"
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* AGREEMENTS */}

{/* SECTION 03 */}

<div className="mb-8 border border-[#e2e0d8] rounded overflow-hidden">
  <div className="bg-[#f2f0ea] border-b border-[#e2e0d8] px-6 py-4 flex items-center gap-4">
    <span className="text-[10px] uppercase tracking-[0.12em] text-[#8a8a84] min-w-[68px]">
      Section 03
    </span>

    <span
      className="text-[15px]"
      style={{ fontFamily: "'DM Serif Display', serif" }}
    >
      Delivery Timeline
    </span>
  </div>

  <div className="p-6">
    <div className="bg-[#f2f0ea] border-l-[3px] border-[#c8a96e] rounded-r px-5 py-4 mb-5 text-[13.5px] text-[#4a4a46] leading-[1.75]">
      <strong className="text-[#1a1a18]">Delivery policy:</strong> All
      edited content — reels and photos — will be delivered within{" "}
      <strong>3 business days</strong> from the shoot date. Rush delivery
      requests are subject to availability and may attract an additional
      fee. Lumi Spotlight is not liable for delays caused by client-side
      factors such as late feedback or delayed payment.
    </div>

    <div className="flex items-start gap-[10px]">
      <input
        type="checkbox"
        name="timeline_agree"
        checked={formData.timeline_agree}
        onChange={handleChange}
        className="mt-[3px] w-[15px] h-[15px] accent-[#8a6f3e]"
      />

      <label className="text-[13px] text-[#4a4a46] leading-[1.55]">
        I have read and agree to the 3-day delivery timeline policy. *
      </label>
    </div>
  </div>
</div>

{/* SECTION 04 */}

<div className="mb-8 border border-[#e2e0d8] rounded overflow-hidden">
  <div className="bg-[#f2f0ea] border-b border-[#e2e0d8] px-6 py-4 flex items-center gap-4">
    <span className="text-[10px] uppercase tracking-[0.12em] text-[#8a8a84] min-w-[68px]">
      Section 04
    </span>

    <span
      className="text-[15px]"
      style={{ fontFamily: "'DM Serif Display', serif" }}
    >
      Content Usage Rights
    </span>
  </div>

  <div className="p-6">
    <div className="bg-[#f2f0ea] border-l-[3px] border-[#c8a96e] rounded-r px-5 py-4 mb-5 text-[13.5px] text-[#4a4a46] leading-[1.75]">
      <strong className="text-[#1a1a18]">Usage rights:</strong> By
      submitting this form, the client grants{" "}
      <strong>Lumi Spotlight</strong> the right to use produced content for
      promotional purposes — including posting on Instagram, TikTok, and
      inclusion in the portfolio. Credit will be given where applicable.
      Content will not be sold to third parties.
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#8a8a84]">
        Exclusions
        <span className="normal-case tracking-normal font-light ml-1">
          (optional)
        </span>
      </label>

      <textarea
        name="exclusions"
        value={formData.exclusions}
        onChange={handleChange}
        placeholder="List any content you do not want published publicly — e.g. specific shots, locations, or platforms..."
        className="w-full min-h-[80px] resize-y bg-[#faf9f6] border border-[#c8c6bc] px-3 py-[9px] text-[14px] outline-none focus:border-[#c8a96e] focus:bg-white"
      />
    </div>
  </div>
</div>

{/* SECTION 05 */}

<div className="mb-8 border border-[#e2e0d8] rounded overflow-hidden">
  <div className="bg-[#f2f0ea] border-b border-[#e2e0d8] px-6 py-4 flex items-center gap-4">
    <span className="text-[10px] uppercase tracking-[0.12em] text-[#8a8a84] min-w-[68px]">
      Section 05
    </span>

    <span
      className="text-[15px]"
      style={{ fontFamily: "'DM Serif Display', serif" }}
    >
      Revision Policy
    </span>
  </div>

  <div className="p-6">
    <div className="bg-[#f2f0ea] border-l-[3px] border-[#c8a96e] rounded-r px-5 py-4 mb-5 text-[13.5px] text-[#4a4a46] leading-[1.75]">
      <strong className="text-[#1a1a18]">Revision policy:</strong> Each
      booking includes a maximum of <strong>2 rounds of revisions.</strong>{" "}
      A revision round covers one consolidated set of feedback submitted at
      a time. Requests beyond the two included rounds will be charged
      additionally, communicated before proceeding. All revision requests
      must be submitted within <strong>5 days</strong> of receiving the
      initial delivery.
    </div>

    <div className="flex items-start gap-[10px]">
      <input
        type="checkbox"
        name="revision_agree"
        checked={formData.revision_agree}
        onChange={handleChange}
        className="mt-[3px] w-[15px] h-[15px] accent-[#8a6f3e]"
      />

      <label className="text-[13px] text-[#4a4a46] leading-[1.55]">
        I understand I am entitled to 2 revision rounds, and that
        additional rounds will incur extra charges. *
      </label>
    </div>
  </div>
</div>

{/* SECTION 06 */}

<div className="mb-8 border border-[#e2e0d8] rounded bg-white overflow-hidden">
  <div className="bg-[#f2f0ea] border-b border-[#e2e0d8] px-6 py-4 flex items-center gap-4">
    <span className="text-[10px] uppercase tracking-[0.12em] text-[#8a8a84] min-w-[68px]">
      Section 06
    </span>

    <span
      className="text-[15px]"
      style={{ fontFamily: "'DM Serif Display', serif" }}
    >
      Payment Plan
    </span>
  </div>

  <div className="p-6">
    <div className="grid md:grid-cols-2 gap-4 mb-5">
      <div className="border border-[#c8a96e] rounded p-4 bg-[#f5edd8]">
        <div
          className="text-[36px] leading-none text-[#8a6f3e] mb-1"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          50%
        </div>

        <div className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#8a8a84] mb-2">
          Before the shoot
        </div>

        <div className="text-[13px] text-[#4a4a46] leading-[1.55]">
          An upfront deposit of 50% of the agreed total is required to
          confirm and validate your booking. No date is secured until this
          payment is received.
        </div>
      </div>

      <div className="border border-[#e2e0d8] rounded p-4 bg-[#faf9f6]">
        <div
          className="text-[36px] leading-none text-[#8a6f3e] mb-1"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          50%
        </div>

        <div className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#8a8a84] mb-2">
          After the shoot
        </div>

        <div className="text-[13px] text-[#4a4a46] leading-[1.55]">
          The remaining balance is due immediately after the shoot is
          completed. Edited content will only be delivered upon confirmation
          of full payment.
        </div>
      </div>
    </div>

    <div className="bg-[#edf4fb] border border-[#a8c8e8] rounded px-5 py-4 text-[13px] text-[#2c5282] leading-[1.65] mb-5">
      <strong>Please note:</strong> Payment details will be communicated
      directly after this form is submitted. All prices are agreed upon
      before booking confirmation. Lumi Spotlight reserves the right to
      cancel a booking if the deposit is not received within{" "}
      <strong>48 hours</strong> of agreement.
    </div>

    <div className="flex items-start gap-[10px]">
      <input
        type="checkbox"
        name="payment_agree"
        checked={formData.payment_agree}
        onChange={handleChange}
        className="mt-[3px] w-[15px] h-[15px] accent-[#8a6f3e]"
      />

      <label className="text-[13px] text-[#4a4a46] leading-[1.55]">
        I understand and agree to the payment plan — 50% deposit before the
        shoot and 50% balance immediately after. *
      </label>
    </div>
  </div>
</div>

      

          {/* SUBMIT */}

          <div className="mt-10 flex flex-col items-center gap-3">

            <button
              type="submit"
              disabled={loading}
              className="w-full max-w-[360px] py-3 uppercase tracking-[0.06em] text-[14px] font-medium bg-[#1a1a18] text-[#faf9f6] hover:bg-[#4a4a46] transition-all disabled:opacity-50"
            >
              {loading
                ? "Submitting..."
                : "Submit"}
            </button>

            <p className="text-[12px] text-[#8a8a84] text-center">
              By submitting, you confirm all information
              provided is accurate.
            </p>

            {success && (
              <div className="max-w-[360px] w-full text-center p-8 bg-[#f0faf4] border border-[#a8d5b8] rounded">

                <h3 className="font-serif text-[20px] text-[#1a4731] mb-2">
                  Form received!
                </h3>

                <p className="text-[13px] text-[#2d6a4f]">
                  Thank you for booking with Lumi
                  Spotlight. You'll hear from us shortly
                  with next steps and payment details.
                </p>

              </div>
            )}

          </div>

        </form>

      </div>
    </div>
  );
}