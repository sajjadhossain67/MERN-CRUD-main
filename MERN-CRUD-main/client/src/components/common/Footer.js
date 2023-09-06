const Footer = () => {
	const link = "https://sjinnovation.com";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Sajjad Hossain{" "}
			<a href={link} target={target}>
			sjinnovation.com
			</a>
		</div>
	);
};

export default Footer;
