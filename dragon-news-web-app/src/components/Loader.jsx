import { Bars } from "react-loader-spinner";

export function Loader() {
  return (
    <div className="flex items-center justify-center">
      <Bars
        height="100"
        width="100"
        color="red"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
