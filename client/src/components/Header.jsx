const Header = ({ title, description }) => {
  return (
    <div>
      <title>{title}</title>
      <meta name='description' content={description} />
    </div>
  );
};

export default Header;
