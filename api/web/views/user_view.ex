defmodule Api.UserView do
  use Api.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, Api.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, Api.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      username: user.username,
      firstname: user.firstname,
      secondname: user.secondname,
      email: user.email}
  end
end
