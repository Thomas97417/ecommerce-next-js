import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import React from "react";
import { OrderInformation } from "./components/OrderInformation";

type OrderHistoryEmailProps = {
  orders: {
    id: string;
    pricePaidInCents: number;
    createdAt: Date;
    downloadVerificationId: string;
    product: {
      name: string;
      imagePath: string;
      description: string;
    };
  }[];
};

OrderHistoryEmail.PreviewProps = {
  orders: [
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      pricePaidInCents: 10000,
      product: {
        name: "Product Name",
        imagePath:
          "/products/843718b4-c7e9-4a5b-975e-c1c2f264e439-istockphoto-517188688-612x612.jpg",
        description: "Product description",
      },
      downloadVerificationId: crypto.randomUUID(),
    },
    {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      pricePaidInCents: 50000,
      product: {
        name: "Product Name 2",
        imagePath:
          "/products/843718b4-c7e9-4a5b-975e-c1c2f264e439-istockphoto-517188688-612x612.jpg",
        description: "Product 2 other description",
      },
      downloadVerificationId: crypto.randomUUID(),
    },
  ],
} satisfies OrderHistoryEmailProps;

export default function OrderHistoryEmail({ orders }: OrderHistoryEmailProps) {
  return (
    <Html>
      <Preview>Order History & Downloads</Preview>
      <Tailwind>
        <Head />
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Text className="text-3xl font-bold">Order History</Text>
            {orders.map((order, index) => (
              <React.Fragment key={order.id}>
                <OrderInformation
                  key={order.id}
                  order={order}
                  product={order.product}
                  downloadVerificationId={order.downloadVerificationId}
                />
                {index < orders.length - 1 && <Hr />}
              </React.Fragment>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
