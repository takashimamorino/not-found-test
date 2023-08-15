import { type GetStaticProps, type NextPage } from "next";

type TTest = {
	foo: string;
};

const Test: NextPage<TTest> = ({ foo }) => {
	return <div>{foo}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
	throw new Error("test");
	// if (err) {
	// 	return {
	// 		// notFound: true,
	// 		// // props: { foo: "bar" },
	// 		revalidate: 60,
	// 		props: {},
	// 	};
	// }
	return { props: { foo: "foo" }, revalidate: 60 };
};

export default Test;
