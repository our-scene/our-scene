module Admin
  class UserSerializer
    include JSONAPI::Serializer
    has_many :places

    attributes :name, :email
  end
end
