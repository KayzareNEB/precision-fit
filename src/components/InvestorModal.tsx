import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InvestorModal = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 border-none shadow-2xl overflow-hidden" style={{ backgroundColor: '#F4F0ED' }}>
        <DialogHeader className="px-8 pt-8 pb-4">
          <DialogTitle className="text-lg font-normal tracking-tight text-foreground">
            Investor Enquiries
          </DialogTitle>
          <DialogDescription className="text-sm font-light leading-relaxed mt-1.5 text-muted-foreground">
            Register your interest and we'll be in touch shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="px-8 pb-8 overflow-y-auto max-h-[70vh]">
          <iframe
            src="https://api.onsync.ai/widget/form/zBg28F7Ctrpy0xGzBsSe"
            className="w-full border-none"
            style={{ minHeight: '450px' }}
            title="Investor Enquiries Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvestorModal;
