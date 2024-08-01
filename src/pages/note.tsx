import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Note } from "../definitions";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

type ShowNoteProps = {
  onDelete: (id: string) => void;
};

export default function ShowNote({ onDelete }: ShowNoteProps) {
  const note = useOutletContext<Note>();
  const navigate = useNavigate();

  return (
    <>
      <Row className="mt-4 align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack direction="horizontal" gap={4}>
            <Link to={`/${note.id}/edit`}>
              <Button type="button" variant="primary">
                Edit
              </Button>
            </Link>
            <Button
              type="button"
              onClick={() => {
                onDelete(note.id);
                navigate("/");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to="..">
              <Button type="button" variant="outline-secondary">
                Back
              </Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
}
