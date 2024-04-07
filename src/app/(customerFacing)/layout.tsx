import Nav, { NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/users">My Orders</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
