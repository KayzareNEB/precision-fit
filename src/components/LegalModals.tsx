import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyModal = ({ open, onOpenChange }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-lg max-h-[85vh] p-0 gap-0">
      <DialogHeader className="p-8 pb-0">
        <DialogTitle className="text-lg font-normal tracking-tight">Privacy Policy</DialogTitle>
        <p className="text-xs text-muted-foreground mt-1">Last updated: 29 March 2026</p>
      </DialogHeader>
      <ScrollArea className="max-h-[65vh] px-8 pb-8 pt-6">
        <div className="space-y-6 text-sm font-light leading-relaxed text-foreground/80">
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">1. Introduction</h3>
            <p>N.E. Body Ltd ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your personal data when you visit our website or engage with us.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">2. Information We Collect</h3>
            <p>We may collect the following information: your name, email address, company or fund name, and any message content you submit through our enquiry forms. We also collect basic analytics data such as browser type, device information, and pages visited.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">3. How We Use Your Information</h3>
            <p>We use your data to respond to investor enquiries, send updates you have opted in to receive, improve our website experience, and comply with legal obligations. We will never sell your personal data to third parties.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">4. Data Retention</h3>
            <p>We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. You may request deletion of your data at any time by contacting us.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">5. Your Rights</h3>
            <p>Under applicable data protection legislation, you have the right to access, rectify, erase, restrict, or object to the processing of your personal data. To exercise these rights, please contact us at hello@nebody.co.uk.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">6. Contact</h3>
            <p>For any privacy-related questions, please contact us at hello@nebody.co.uk.</p>
          </section>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export const TermsModal = ({ open, onOpenChange }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-lg max-h-[85vh] p-0 gap-0">
      <DialogHeader className="p-8 pb-0">
        <DialogTitle className="text-lg font-normal tracking-tight">Terms of Use</DialogTitle>
        <p className="text-xs text-muted-foreground mt-1">Last updated: 29 March 2026</p>
      </DialogHeader>
      <ScrollArea className="max-h-[65vh] px-8 pb-8 pt-6">
        <div className="space-y-6 text-sm font-light leading-relaxed text-foreground/80">
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">1. Acceptance of Terms</h3>
            <p>By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">2. Intellectual Property</h3>
            <p>All content on this website, including text, graphics, logos, and design elements, is the property of N.E. Body Ltd and is protected by applicable intellectual property laws. Our technology is patent-pending.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">3. Use of Website</h3>
            <p>This website is provided for informational purposes only. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">4. Limitation of Liability</h3>
            <p>N.E. Body Ltd shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">5. Governing Law</h3>
            <p>These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">6. Contact</h3>
            <p>For questions regarding these terms, please contact us at hello@nebody.co.uk.</p>
          </section>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export const CookieModal = ({ open, onOpenChange }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-lg max-h-[85vh] p-0 gap-0">
      <DialogHeader className="p-8 pb-0">
        <DialogTitle className="text-lg font-normal tracking-tight">Cookie Policy</DialogTitle>
        <p className="text-xs text-muted-foreground mt-1">Last updated: 29 March 2026</p>
      </DialogHeader>
      <ScrollArea className="max-h-[65vh] px-8 pb-8 pt-6">
        <div className="space-y-6 text-sm font-light leading-relaxed text-foreground/80">
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">1. What Are Cookies</h3>
            <p>Cookies are small text files stored on your device when you visit a website. They help us understand how you interact with our site and improve your experience.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">2. Cookies We Use</h3>
            <p><strong className="font-medium">Essential cookies:</strong> Required for the website to function properly, including remembering your cookie consent preferences.</p>
            <p className="mt-2"><strong className="font-medium">Analytics cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous usage data.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">3. Managing Cookies</h3>
            <p>You can accept or reject non-essential cookies using the consent banner displayed when you first visit the site. You can also manage cookies through your browser settings at any time.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">4. Third-Party Cookies</h3>
            <p>We may use third-party services that set their own cookies. We do not control these cookies and recommend reviewing the relevant third-party privacy policies.</p>
          </section>
          <section>
            <h3 className="text-sm font-medium text-foreground mb-2">5. Contact</h3>
            <p>For questions about our use of cookies, please contact us at hello@nebody.co.uk.</p>
          </section>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);
