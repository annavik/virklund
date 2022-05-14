export const Spacer = ({ size }: { size: number }) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0 }}
    ></div>
  );
};
