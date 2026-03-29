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

const UpdatesModal = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[92vw] sm:max-w-lg p-0 gap-0 border-none shadow-2xl rounded-xl max-h-[85vh] sm:max-h-[90vh] flex flex-col overflow-hidden"
        style={{ backgroundColor: '#F4F0ED' }}
      >
        <DialogHeader className="px-5 sm:px-8 pt-5 sm:pt-8 pb-2 sm:pb-4 shrink-0">
          <DialogTitle className="text-base sm:text-lg font-normal tracking-tight text-foreground">
            Keep Updated
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm font-light leading-snug sm:leading-relaxed mt-1 sm:mt-1.5 text-muted-foreground">
            Sign up to receive updates from N.E Body.
          </DialogDescription>
        </DialogHeader>
        <div className="px-3 sm:px-8 pb-4 sm:pb-8 flex-1 min-h-0 overflow-y-auto">
          <iframe
            src="https://api.onsync.ai/widget/form/dmVymJlYyx7nRCqbyRS2"
            className="w-full border-none"
            style={{ height: '400px' }}
            title="Get Updates Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatesModal;
