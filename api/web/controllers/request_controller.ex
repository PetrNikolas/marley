defmodule Api.RequestController do
  use Api.Web, :controller

  alias Api.Request

  def index(conn, _params) do
    requests = Repo.all(Request)
    render(conn, "index.json", requests: requests)
  end

  def create(conn, %{"request" => request_params}) do
    changeset = Request.changeset(%Request{}, request_params)

    case Repo.insert(changeset) do
      {:ok, request} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", request_path(conn, :show, request))
        |> render("show.json", request: request)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Api.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    request = Repo.get!(Request, id)
    render(conn, "show.json", request: request)
  end

  def update(conn, %{"id" => id, "request" => request_params}) do
    request = Repo.get!(Request, id)
    changeset = Request.changeset(request, request_params)

    case Repo.update(changeset) do
      {:ok, request} ->
        render(conn, "show.json", request: request)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Api.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    request = Repo.get!(Request, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(request)

    send_resp(conn, :no_content, "")
  end
end
