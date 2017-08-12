defmodule Api.Request do
  use Api.Web, :model

  schema "requests" do
    field :url, :string
    field :type, :string
    field :parametres, :string
    field :example, :string
    field :success, :string
    field :error, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:url, :type, :parametres, :example, :success, :error])
    |> validate_required([:url, :type, :parametres, :example, :success, :error])
  end
end
