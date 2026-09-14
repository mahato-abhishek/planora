"use client";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="z-50 top-0 left-0 min-h-screen h-full fixed flex items-center justify-center w-full backdrop-blur-xs bg-mist-950/20">
      {children}
    </div>
  );
};
