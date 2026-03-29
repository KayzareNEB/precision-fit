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
        className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] sm:max-w-lg p-0 gap-0 border-none shadow-2xl overflow-hidden rounded-lg h-[93vh] sm:h-auto sm:max-h-[90vh] flex flex-col"
        style={{ backgroundColor: '#F4F0ED' }}
      >
        <DialogHeader className="px-4 sm:px-8 pt-3 sm:pt-8 pb-1 sm:pb-4 shrink-0">
          <DialogTitle className="text-sm sm:text-lg font-normal tracking-tight text-foreground">
            Investor Enquiries
          </DialogTitle>
          <DialogDescription className="text-[11px] sm:text-sm font-light leading-snug sm:leading-relaxed mt-0.5 sm:mt-1.5 text-muted-foreground">
            Register your interest and we'll be in touch shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="px-2 sm:px-8 pb-1 sm:pb-8 flex-1 min-h-0 overflow-hidden">
          <iframe
            src="https://api.onsync.ai/widget/form/zBg28F7Ctrpy0xGzBsSe"
            className="w-full h-full border-none"
            title="Investor Enquiries Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvestorModal;
