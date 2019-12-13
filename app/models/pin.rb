# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  link        :string
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pin < ApplicationRecord
  validates :title, :creator_id, presence: true

  belongs_to :creator,
    primary_key: :id, 
    foreign_key: :creator_id,
    class_name: :User

  has_many :board_pins
    
  has_many :boards,
    through: :board_pins

end


