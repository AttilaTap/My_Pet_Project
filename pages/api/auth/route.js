import {authConfig} from "next-auth";
import Nextauth from "next-auth/next";

const handler = Nextauth(authConfig);

export default handler;