import { Circles } from "react-loader-spinner";

export function Loader() {
  return (
    <div className="flex items-center justify-center">
        <Circles
      height="120"
      width="120"
      color="red"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div>
    
  );
}
