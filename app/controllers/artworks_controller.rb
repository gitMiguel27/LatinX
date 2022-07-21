class ArtworksController < ApplicationController
    skip_before_action :authorize

    def index
        artworks = Artwork.all
        render json: artwork, status: :ok
    end

    def show
        artwork = Artwork.find(params[:id])
        render json: artwork, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: { error: "Artwork not found" }, status: :not_found
    end
end
