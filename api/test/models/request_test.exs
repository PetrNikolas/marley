defmodule Api.RequestTest do
  use Api.ModelCase

  alias Api.Request

  @valid_attrs %{error: "some content", example: "some content", parametres: "some content", success: "some content", type: "some content", url: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Request.changeset(%Request{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Request.changeset(%Request{}, @invalid_attrs)
    refute changeset.valid?
  end
end
