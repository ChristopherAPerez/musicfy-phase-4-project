class SongsController < ApplicationController
    wrap_parameters format: []

    def index
        user = User.find_by(id: session[:user_id])
        if user
            songs = Song.all
            render json: songs
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user
            song = user.songs.create(song_params)
            if song
                render json: song, status: :created
            else
                render json: { errors: ["errors"] }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    private 

    def song_params
        params.permit(:song_title, :feature, :song_length, :streams, :user_id, :album_id)
    end

end
