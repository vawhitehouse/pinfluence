# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_13_004327) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_pins", force: :cascade do |t|
    t.integer "board_id", null: false
    t.integer "pin_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_board_pins_on_board_id"
    t.index ["pin_id"], name: "index_board_pins_on_pin_id"
  end

  create_table "boards", force: :cascade do |t|
    t.string "board_name", null: false
    t.string "description"
    t.boolean "private", default: false, null: false
    t.integer "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_name"], name: "index_boards_on_board_name"
    t.index ["creator_id"], name: "index_boards_on_creator_id"
  end

  create_table "pins", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.string "link"
    t.integer "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_pins_on_creator_id"
    t.index ["title"], name: "index_pins_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.integer "age", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
