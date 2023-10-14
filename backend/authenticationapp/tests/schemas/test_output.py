"""Contains tests for the schemas."""

from authenticationapp.schemas.output import ErrorSchema, SuccessSchema

from ..helpers import TestCase


class TestOutputSchemas(TestCase):
    """Test the output schemas."""

    def test_error_schema(self):
        """Test the ErrorSchema schema."""
        error_schema = ErrorSchema(
            detail="test",
        )

        assert error_schema.detail == "test"

    def test_success_schema(self):
        """Test the SuccessSchema schema."""
        success_schema = SuccessSchema(
            message="test",
        )

        assert success_schema.message == "test"
