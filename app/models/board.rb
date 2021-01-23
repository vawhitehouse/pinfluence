# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  board_name  :string           not null
#  description :string
#  private     :boolean          default(FALSE), not null
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ApplicationRecord
  validates :board_name, presence: true
  validates :private, inclusion: { in: [true, false]}
  before_validation :set_defaults

  belongs_to :creator, 
    primary_key: :id, 
    foreign_key: :creator_id,
    class_name: :User

  has_many :pins
  
  # joins associations
  # has_many :board_pins

  # has_many :pins, 
  #   through: :board_pins

  def set_defaults
    self.private ||= false
  end

end
