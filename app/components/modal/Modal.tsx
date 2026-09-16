"use client";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center overflow-y-auto bg-mist-950/20 p-3 backdrop-blur-xs sm:p-6">
      {children}
    </div>
  );
};
