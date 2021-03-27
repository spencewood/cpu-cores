const useHardwareConcurrency = () => {
  let initialHardwareConcurrency;
  if (typeof navigator !== "undefined" && "hardwareConcurrency" in navigator) {
    initialHardwareConcurrency = {
      unsupported: false,
      numberOfLogicalProcessors: navigator.hardwareConcurrency,
    };
  } else {
    initialHardwareConcurrency = { unsupported: true };
  }
  return { ...initialHardwareConcurrency };
};

export default function Home() {
  const hw = useHardwareConcurrency();
  if (hw.unsupported) {
    return "Not supported";
  }
  return (
    <div>Number of logical processors: {hw.numberOfLogicalProcessors}</div>
  );
}
