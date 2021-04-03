# Discord Music Bot
A Discord Music Bot For Begginers. Easy To Install Also :> Use the `help` command to get a list of commands!

### Setup

Make sure that [pipenv](https://pipenv.pypa.io/en/latest/) is installed. Navigate to the project directory, and run `pipenv install` to install the Python dependencies.

To allow for streaming of media, make sure `opus` and `ffmpeg` are installed and in your environment.

To run the bot, activate the virtual environment with `pipenv shell` and then `python -m musicbot` to start the bot.

### Config

When you run the bot for the first time, a default configuration file will be generated called `config.toml`. You can enter that file and add your token, etc.

If you ever wish to restore the bot to default configuration, you can simply delete (or rename) your config file. A new one will be generated upon startup.
