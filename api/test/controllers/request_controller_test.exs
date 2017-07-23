defmodule Api.RequestControllerTest do
  use Api.ConnCase

  alias Api.Request
  @valid_attrs %{error: "some content", example: "some content", parametres: "some content", success: "some content", type: "some content", url: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, request_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    request = Repo.insert! %Request{}
    conn = get conn, request_path(conn, :show, request)
    assert json_response(conn, 200)["data"] == %{"id" => request.id,
      "url" => request.url,
      "type" => request.type,
      "parametres" => request.parametres,
      "example" => request.example,
      "success" => request.success,
      "error" => request.error}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, request_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, request_path(conn, :create), request: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Request, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, request_path(conn, :create), request: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    request = Repo.insert! %Request{}
    conn = put conn, request_path(conn, :update, request), request: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Request, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    request = Repo.insert! %Request{}
    conn = put conn, request_path(conn, :update, request), request: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    request = Repo.insert! %Request{}
    conn = delete conn, request_path(conn, :delete, request)
    assert response(conn, 204)
    refute Repo.get(Request, request.id)
  end
end
