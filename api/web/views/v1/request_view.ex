defmodule Api.V1.RequestView do
  use Api.Web, :view

  def render("index.json", %{requests: requests}) do
    %{data: render_many(requests, Api.V1.RequestView, "request.json")}
  end

  def render("show.json", %{request: request}) do
    %{data: render_one(request, Api.V1.RequestView, "request.json")}
  end

  def render("request.json", %{request: request}) do
    %{id: request.id,
      url: request.url,
      type: request.type,
      parametres: request.parametres,
      example: request.example,
      success: request.success,
      error: request.error}
  end
end
