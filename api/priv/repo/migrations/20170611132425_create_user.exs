defmodule Api.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string
      add :firstname, :string
      add :secondname, :string
      add :email, :string

      timestamps()
    end

  end
end
