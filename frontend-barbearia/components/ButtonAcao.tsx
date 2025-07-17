type ButtonProps = {
  texto: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({ texto, onClick, disabled, type }: ButtonProps) {
  return (
    <div className="ButtonAction">
            <button onClick={onClick} disabled={disabled} className="btn-delete" type={type}>
        {texto}
      </button>
    </div>
  );
}
