type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className=" mx-auto min-h-screen flex flex-col">
      {children}
    </div>
  );
}
