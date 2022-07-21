class CountriesController < ApplicationController
    skip_before_action :authorize

    def index
        countries = Country.all
        render json: countries, status: :ok
    end
end
