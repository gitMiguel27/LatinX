class ArtistsController < ApplicationController
    skip_before_action :authorize

    def index
        artists = Artist.all
        render json: artists, status: :ok
    end

    def show
        artist = Artist.find(params[:id])
        render json: artist, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: { error: "Artist not found" }, status: :not_found
    end
end
