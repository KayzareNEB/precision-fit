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
      <DialogContent
        className="w-[calc(100%-2rem)] sm:max-w-lg p-0 gap-0 border-none shadow-2xl overflow-hidden rounded-lg max-h-[90vh] flex flex-col"
        style={{ backgroundColor: '#F4F0ED' }}
      >
        <DialogHeader className="px-5 sm:px-8 pt-5 sm:pt-8 pb-2 sm:pb-4 shrink-0">
          <DialogTitle className="text-base sm:text-lg font-normal tracking-tight text-foreground">
            Investor Enquiries
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm font-light leading-relaxed mt-1 sm:mt-1.5 text-muted-foreground">
            Register your interest and we'll be in touch shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="px-5 sm:px-8 pb-5 sm:pb-8 overflow-y-auto flex-1 min-h-0">
          <iframe
            src="https://api.onsync.ai/widget/form/zBg28F7Ctrpy0xGzBsSe"
            className="w-full border-none"
            style={{ minHeight: '400px', height: '55vh', maxHeight: '500px' }}
            title="Investor Enquiries Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvestorModal;
