import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { Tag } from "../definitions";

type EditTagsProps = {
  show: boolean;
  handleClose: () => void;
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
  availableTags: Tag[];
};

export default function EditTags({
  show,
  handleClose,
  onUpdateTag,
  onDeleteTag,
  availableTags,
}: EditTagsProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Group controlId={tag.id}>
                    <Form.Control
                      type="text"
                      onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                      value={tag.label}
                    />
                  </Form.Group>
                </Col>
                <Col xs="auto">
                  <Button
                    onClick={() => onDeleteTag(tag.id)}
                    variant="outline-danger"
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
