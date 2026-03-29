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
      <DialogContent className="sm:max-w-lg p-0 gap-0 border-none shadow-2xl overflow-hidden" style={{ backgroundColor: '#F4F0ED' }}>
        <DialogHeader className="px-8 pt-8 pb-4">
          <DialogTitle className="text-lg font-normal tracking-tight text-foreground">
            Keep Updated
          </DialogTitle>
          <DialogDescription className="text-sm font-light leading-relaxed mt-1.5 text-muted-foreground">
            Sign up to receive updates from N.E Body.
          </DialogDescription>
        </DialogHeader>
        <div className="px-8 pb-8 overflow-y-auto max-h-[70vh]">
          <iframe
            src="https://api.onsync.ai/widget/form/dmVymJlYyx7nRCqbyRS2"
            className="w-full border-none"
            style={{ minHeight: '450px' }}
            title="Get Updates Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatesModal;
