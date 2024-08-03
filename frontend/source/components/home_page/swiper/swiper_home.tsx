"use client";

import { Swiper_module } from "./swiper_module/swiper_module";
import React, { useState } from "react";
import { Form, Input, Modal, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";

import s from "./swiper_home.module.scss";

export default function Swiper_home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={s.call_button_container}>
        <div className={s.button_container_zakaz}>
          <button className={s.default_button} onClick={() => setIsOpen(true)}>
            Замовити дзвінок
            <Image
              className={s.buttom_img}
              src="/phone.svg"
              alt=""
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      {/* Свайпер */}
      <div className={s.swiper_container}>
        <Swiper_module />
      </div>
      <Modal
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        okButtonProps={{ size: "large" }}
        cancelButtonProps={{ size: "large" }}
      >
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          Оставить заявку
        </Typography.Title>
        <Form layout={"vertical"} requiredMark={false} name={"request"}>
          <Form.Item rules={[{ required: true }]} label={"Имя"} name={"name"}>
            <Input size="large" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            label={"Телефон"}
            name={"phone"}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            label={"Комментарий"}
            name={"comment"}
          >
            <TextArea rows={5} size="large" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
