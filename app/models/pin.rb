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
#  board_id    :integer          not null
#

class Pin < ApplicationRecord
  validates :title, :creator_id, :board_id, presence: true

  validate :ensure_image

  belongs_to :creator,
    primary_key: :id, 
    foreign_key: :creator_id,
    class_name: :User

  belongs_to :board

  has_one_attached :image

  def ensure_image
    unless self.image.attached?
      errors[:image] << "An image is required to create a Pin."
    end
  end

  # joins associations
  # has_many :board_pins
    
  # has_many :boards,
  #   through: :board_pins

end


