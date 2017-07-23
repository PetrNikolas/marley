defmodule Api.Repo.Migrations.CreateRequest do
  use Ecto.Migration

  def change do
    create table(:requests) do
      add :url, :string
      add :type, :string
      add :parametres, :string
      add :example, :string
      add :success, :string
      add :error, :string

      timestamps()
    end

  end
end
