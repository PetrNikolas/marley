defmodule Api.User do
  use Api.Web, :model

  schema "users" do
    field :username, :string
    field :firstname, :string
    field :secondname, :string
    field :email, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:username, :firstname, :secondname, :email])
    |> validate_required([:username, :firstname, :secondname, :email])
  end
end
