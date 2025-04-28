import React, { useState } from "react";
import { Button, Form, Input, message, Modal, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusCircleOutlined } from "@ant-design/icons";

const AddMovie = ({ add }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: Math.random(),
      title,
      posterUrl,
      description,
      rate,
    };
    add(newMovie);
    handleOk();
    success();
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        <PlusCircleOutlined />
        Add Movie
      </Button>
      <Modal
        title="Adding a new movie"
        open={isModalOpen}
        onOk={handleAddMovie}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxwidth: 600 }}
        >
          <Form.Item label="Title">
            <Input
              value={title}
              onChange={handleTitle}
              placeholder="Add a title"
            />
          </Form.Item>
          <Form.Item label="PosterUrl">
            <Input
              value={posterUrl}
              onChange={handlePosterUrl}
              placeholder="http://google.com/movies/movie.jpg"
            />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea
              value={description}
              onChange={handleDescription}
              placeholder="add a description of the movie"
              rows={4}
            />
          </Form.Item>
          <Form.Item label="Rate">
            <Rate value={rate} onChange={handleRate} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddMovie;
