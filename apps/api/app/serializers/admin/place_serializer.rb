module Admin
  class PlaceSerializer
    include JSONAPI::Serializer
    CACHE_EXPIRATION = 24.hours
    IMAGE_SIZE = [500, 500].freeze
    belongs_to :user
    attributes :title, :blurb, :description

    attribute :user do |object|
      Admin::UserSerializer.new(object.user)
    end

    attribute :primary_image do |object|
      if object.primary_image.present?
        object.primary_image.variant(
          resize_to_limit: IMAGE_SIZE
        ).processed.url(
          expires_in: CACHE_EXPIRATION
        )
      end
    end
  end
end
