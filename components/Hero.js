export default function Header({ title, children }) {
  return (
    <div className="pt-20 mt-20 mb-20">
      <div className="flex">
        <div className="leading-loose font-bold text-4xl">{title}</div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/64655d054ab56d064ceb6cf3/082a94d1-4233-4d45-8f6e-c416b47581b5/iPad+Mini.png?format=1000w"
          width={'30%'}
        />
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}
