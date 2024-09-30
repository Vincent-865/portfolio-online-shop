
export default function Card(props:any) {
    const {children, text, className} = props;
    return (
      <button {...props} className={`${className}`}>
          <p>{text || children}</p>
      </button>
    );
  }