import { useState } from "react";
import { Send } from "lucide-react";
import { profile as p } from "@/content/profile";

// Messages are emailed to profile.email via FormSubmit (works on static hosting like GitHub Pages).
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if ((data["_honey"] as string)?.length) return;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${p.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `Portfolio message from ${String(data["name"])}`, _template: "table" }),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required maxLength={100} placeholder="Your name" className="field" />
        <input name="email" type="email" required maxLength={150} placeholder="Your email" className="field" />
      </div>
      <input name="subject" maxLength={150} placeholder="Subject" className="field" />
      <textarea name="message" required maxLength={2000} rows={5} placeholder="Your message" className="field resize-none" />
      <button type="submit" disabled={status === "sending"} className="btn-primary justify-center disabled:opacity-60">
        <Send className="h-4 w-4" /> {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && <p className="text-sm text-primary">Thank you! Your message has been sent.</p>}
      {status === "error" && (
        <p className="text-sm text-destructive">Couldn't send right now. Please email {p.email} directly.</p>
      )}
    </form>
  );
}
