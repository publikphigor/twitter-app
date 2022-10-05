import Head from "next/head";
import { Header, SearchUser, UserCard } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Koladele Olaitan" />
        <meta
          name="description"
          content="This is a simple tool that you can use to find any Twitter user by their username."
        />
        <title>Twitter Find User</title>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>

      <div className="w-full">
        <Header />
        <SearchUser />
        <div className="grid w-full px-[24px] lg:px-0 grid-cols-1 gap-4 mx-auto mt-12 mb-40 lg:w-4/5 sm:grid-cols-2 md:grid-cols-3">
          <UserCard />
        </div>
      </div>
    </div>
  );
}
