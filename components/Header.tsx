interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header>
      <div className="text-center mb-10">
        <h1 className="font-bold text-secondary ">{title}</h1>
        <p className="w-xs mx-auto">{subtitle}</p>
      </div>
    </header>
  );
}
