import { type GetStaticProps, type NextPage } from "next";

type TTest = {
	foo: string;
};

const Test: NextPage<TTest> = ({ foo }) => {
	return <div>{foo}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
	return { props: { foo: "foo" }, revalidate: 60 };
};

export default Test;
